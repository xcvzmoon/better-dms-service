import { extractText, getDocumentProxy } from 'unpdf';

export async function getPdfData(buffer: Buffer) {
  const document = await getDocumentProxy(new Uint8Array(buffer));
  const metadata = await document.getMetadata();
  const extracted = await extractText(document, { mergePages: true });
  const parsed = metadata ? JSON.parse(JSON.stringify(metadata)) : {};

  return {
    metadata: parsed,
    totalPages: extracted.totalPages || 0,
    text: extracted.text || '',
  };
}
