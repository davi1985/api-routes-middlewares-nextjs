export const GET = async (request: Request) => {
  const headers = new Headers(request.headers);

  console.log({ headers });

  return new Response('Hello JStack');
};
