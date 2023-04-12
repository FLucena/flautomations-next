export default function Post(props) {
  
  const keys = Object.keys(props);
  const values = keys.map(key => decodeURIComponent(props[key]));
  const encodedValues = values.map(val => encodeURI(val));
  
  return (
    <>
      <div>
        <h1>{decodeURI(encodedValues[0])}</h1>
        <p>{decodeURI(encodedValues[1])}</p>
      </div>
    </>
  );
}