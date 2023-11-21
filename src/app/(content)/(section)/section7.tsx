export default function Section7() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url("/art-paper.jpg")`,
        zIndex: 0,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: 50,
          transform: "translateY(-1px)",
          //   backgroundColor: "red",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2600 131.1"
          preserveAspectRatio="none"
          speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
          speechify-initial-font-size="16px"
          fill="#84865f"
        >
          <path
            d="M0 0L2600 0 2600 69.1 0 0z"
            speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            speechify-initial-font-size="16px"
          ></path>
          <path
            style={{ opacity: 0.5 }}
            d="M0 0L2600 0 2600 69.1 0 69.1z"
            speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            speechify-initial-font-size="16px"
          ></path>
          <path
            style={{ opacity: 0.25 }}
            d="M2600 0L0 0 0 130.1 2600 69.1z"
            speechify-initial-font-family='-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            speechify-initial-font-size="16px"
          ></path>
        </svg>
      </div>
    </div>
  );
}
