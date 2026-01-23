export default function Home() {
  return (
    <div style={styles.container}>
        <div style={styles.outercard}>
            <div style={styles.card}>
            <h1 style={styles.title}>Still building!</h1>
            <p style={styles.text}>
            Under construction!
            <br />
            Check back soon 💫
            </p>
            <p style={styles.subtle}>
            — Anna
            </p>
        </div>

        </div>
      
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(#fbafe3ff, #f54470ff)",
    fontFamily: "'Inter', system-ui, sans-serif",
    padding: "1rem",
  },
  outercard: {
    background: "white",
    borderRadius: "16px",
    padding: "3rem 2.5rem",
    textAlign: "center",
    maxWidth: "840px",
    background: "linear-gradient( #f54470ff, #fbafe3ff)",
    boxShadow: "inset 0 10px 30px rgba(0, 0, 0, 0.41)",
  },
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "3rem 2.5rem",
    textAlign: "center",
    maxWidth: "420px",
    background: "linear-gradient( #fdfbfbff, #fdfbfdff)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.41)",
  },
  emoji: {
    fontSize: "3rem",
    display: "block",
    marginBottom: "1rem",
  },
  title: {
    fontSize: "1.75rem",
    marginBottom: "0.75rem",
  },
  text: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: 1.6,
  },
  subtle: {
    marginTop: "2rem",
    fontSize: "0.85rem",
    color: "#999",
  },
};
