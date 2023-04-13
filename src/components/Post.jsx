import Image from 'next/image';

export default function Post(props) {
  const keys = Object.keys(props);
  const values = keys.map(key => decodeURIComponent(props[key]));
  const encodedValues = values.map(val => encodeURI(val));
  const { postClassName, titleClassName, imgWrapperClassName, messageClassName  } = encodedValues;
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
    </div>
  );
}