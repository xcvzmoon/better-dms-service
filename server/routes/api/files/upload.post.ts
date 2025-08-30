import { createError, createEventStream, defineEventHandler, readMultipartFormData } from 'h3';
import { getPdfData } from '~/utils/getPdfData';

import * as z from 'zod';

const formDataSchema = z.array(
  z.object({
    name: z.literal('files'),
    filename: z.string(),
    type: z.string(),
    data: z.instanceof(Buffer),
  }),
);

type Pdf = {
  file: string;
  pages: number;
  metadata: string;
  content: string;
};

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);

  if (!formData) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid form data',
    });
  }

  const parsed = formDataSchema.safeParse(formData);

  if (parsed.error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid file upload',
      data: parsed.error,
    });
  }

  if (!parsed.data.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No files uploaded',
    });
  }

  const eventStream = createEventStream(event);
  const pdfs: Pdf[] = [];

  eventStream.push('0');

  // Uncomment na lang para masimulate yung may delay kasi ilang ms lang naman
  //   function delay(ms: number) {
  //     return new Promise((resolve) => setTimeout(resolve, ms));
  //   }

  (async () => {
    for (let index = 0; index < parsed.data.length; index++) {
      const file = parsed.data[index];
      const pdf = await getPdfData(file.data);

      pdfs.push({
        file: file.filename,
        pages: pdf.totalPages,
        metadata: pdf.metadata,
        content: pdf.text,
      });

      //   await delay(Math.floor(Math.random() * 3000) + 2000);
      eventStream.push(Math.round(((index + 1) / parsed.data.length) * 100).toString());
    }

    eventStream.close();
  })();

  return eventStream.send();
});
