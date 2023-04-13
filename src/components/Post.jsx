import Image from 'next/image';
import Link from 'next/link';
export default function Post(props) {

  const keys = Object.keys(props);
  const values = keys.map(key => decodeURIComponent(props[key]));
  const encodedValues = values.map(val => encodeURI(val));
  const { id } = props;
  const { postClassName, titleClassName, imgWrapperClassName, messageClassName  } = encodedValues;
  const nextPageId = parseInt(id) + 1;
  const nextPageUrl = `/api/${nextPageId}`;
  const previousPageId = parseInt(id) - 1;
  const previousPageUrl = `/api/${previousPageId}`;
  
  return (
    <div className={postClassName}>
      <h1 className={titleClassName}>{decodeURI(encodedValues[0])}</h1>
      <p>{decodeURI(encodedValues[1])}</p>
      {encodedValues[3] !== "" ? (
          <div className={imgWrapperClassName}>
            <Image className="" src={decodeURI(encodedValues[3])} alt="Post image" width={500} height={500} />
          </div>
        ) : (
          <div className={imgWrapperClassName}>
            <Image className="" src={decodeURI(encodedValues[4])} alt="No image" width={500} height={500} />
            <p className={messageClassName}>No image available</p>
          </div>
        )}
      <br></br>
      {encodedValues[2] !== "" ? (
        <div className="">
          <iframe className="" src={encodedValues[2]} allow="autoplay" />
        </div>
      ) : (
        <p className={messageClassName}>No video available</p>
      )}
      <br></br>
      <div>
      <Link href={previousPageUrl}>
          Previous page
      </Link>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Link href={nextPageUrl}>
        Next page
      </Link>
      </div>
    </div>
  );
}