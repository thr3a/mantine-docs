export function formatCode(code: any) {
  if(Array.isArray(code)) {
    return (code.find((x) => x.language ==='tsx').code);
  } else {
    return code;
  }
}
