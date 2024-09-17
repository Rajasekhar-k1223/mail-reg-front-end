import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

const doc = new Document({
  sections: [
    {
      children: [
        new Paragraph({
          children: [
            new TextRun("Hello, World!"),
          ],
        }),
      ],
    },
  ],
});

Packer.toBlob(doc).then((blob) => {
  saveAs(blob, "example.docx");
});
