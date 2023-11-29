import Link from "next/link";
import Image from "next/image";

function Card( props ) {
  return (
    <div className="card">
        <span className="card-header">
          <Image src={ props.imgUrl } width={50} height={50} className="card-img-top" alt="Card Image" />
          <h5 className="card-title">{props.title}</h5>
        </span>
      <div className="card-body">
    
        <p className="card-text">{props.children}</p>
      </div>
    </div>
  );
}

export default Card;
