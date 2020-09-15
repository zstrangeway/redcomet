export default function checkParams(
  body: object,
  params: Array<string>
): Array<string> {
  const missingParams: Array<string> = []
  params.forEach((param) => {
    if (!(param in body)) missingParams.push(param)
  })
  return missingParams
}
