import Image from "next/image";

export default function AuthorCard(props) {
  const { authorName, authorImg } = props;
  const styles = {
    authorCard: {
      maxWidth: '700px',
      margin: '20px',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem',
      borderRadius: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    },
    avatar: {
      marginRight: '2rem',
      borderRadius: '50%',
      overflow: 'hidden',
      width: '15vw', // set width to 15% of viewport width
      height: '15vw', // set height to 15% of viewport height
      maxWidth: '120px', // add max-width for smaller screens
      maxHeight: '120px', // add max-height for smaller screens
    },
    bio: {
      fontSize: '1.2rem',
      lineHeight: '1.5',
      color: '#555',
    },
    name: {
      flex: '50%',
    },
    details: {
      flex: '50%',
    },
  };

  return (
    <div style={styles.authorCard}>
      <div style={styles.avatar}>
        <Image src={authorImg} alt="Author Avatar" width={120} height={120} />
      </div>
      <div style={styles.details}>
        <div style={styles.name}>
          <h1>{authorName}</h1>
        </div>
        <div>
          <p style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
            neque id felis laoreet, vel posuere augue tincidunt. Sed vel nulla sed
            eros venenatis pharetra.
          </p>
        </div>
      </div>
    </div>
  );
}
