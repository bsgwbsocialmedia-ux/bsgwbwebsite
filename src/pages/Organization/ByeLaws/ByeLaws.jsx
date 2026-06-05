import './ByeLaws.css';

export default function ByeLaws() {

  const pdfs = [
    {
      title:
        'BHARAT SCOUT AND GUIDE UTTAR PRADESH-STATE BYE LAWS',
      link: '#'
    },
    {
      title:
        'BHARAT SCOUT AND GUIDE UTTAR PRADESH-DISTRICT BYE LAWS',
      link: '#'
    }
  ];

  return (
    <div className="bye-page">

      {pdfs.map((item,index)=>(

        <div
          className="bye-row"
          key={index}
        >

          <h2>
            {item.title}
          </h2>

          <a href={item.link}>
            Click to Download
          </a>

        </div>

      ))}

    </div>
  );
}