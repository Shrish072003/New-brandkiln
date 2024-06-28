(async () => {
    const serve = (await import('serve')).default;
    serve('build', { port: 3000 });
  })();
  