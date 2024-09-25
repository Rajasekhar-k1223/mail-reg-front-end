import React, { useState} from 'react';
import HeaderPage from './Header/HeaderPage'; 
import SideMenu from './SideMenu/SideMenuPage';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import mammoth from 'mammoth';
import CreateDomain from './CreateDomain';
import ListOfDomains from './ListOfDomains';
export default function DashboardPage() {
      const [content, setContent] = useState('');
const docs = [
    { uri: "../assets/8 S3 Bucket using Terraform.pdf" }, // Remote file
    { uri: require("../assets/8 S3 Bucket using Terraform.pdf") }, // Local File
  ];

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.convertToHtml({ arrayBuffer });
    setContent(result.value);
  };

     const generateDocument = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun("Hello, World! This is a Word document generated using docx library."),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "example.docx");
    });
  };
  return (
      <>
          <HeaderPage />
          <SideMenu />
          <div className='scroller' style={{ width: "96%",left:"4%",padding:"1rem",position:"absolute",height:"90vh",overflow:"auto" }}>
        <h2>Dashboard</h2>
        <p>Set up email with a custom domain</p>
<p>create email address that end in your organization's name , like you@elv-i.com.</p>
              <p>to get stared.choose your domain</p>
           {/* <div class="container">
        <div class="hexagon top"></div>
        <div class="hexagon center"></div>
        <div class="hexagon bottom-left"></div>
        <div class="hexagon bottom-right"></div>
    </div> */}
              
                  <div  className="avalible-apps-list">
              <h2>Apps
              </h2>
                  {/* <button onClick={generateDocument}>Generate Word Document</button> */}
                  <div>
                      
                  </div>
              </div>
              {/* <CreateDomain /> */}
              <ListOfDomains />
          {/* <DocViewer
      documents={docs}
      initialActiveDocument={docs[1]}
      pluginRenderers={DocViewerRenderers}
    /> */}
           {/* <div>
      <h2>Upload a Word Document</h2>
      <input type="file" accept=".docx" onChange={handleFileChange} />
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div> */}
              </div>
    </>
  );
}
