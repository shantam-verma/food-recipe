"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
        <h3>Error: {error}</h3>
      </body>
    </html>
  );
}
