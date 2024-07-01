import { XMLParser } from "fast-xml-parser";

export function getDataFromXml(xmlDoc: any, key: any) {
  try {
    const resultNode = xmlDoc.getElementsByTagName(key)[0];
    const resultValue = resultNode?.textContent || resultNode?.innerHTML;
    return resultValue;
  } catch (error) {
    console.log(error);
  }
}
export function convertXmlToJson(xmlData: string) {
  const options: any = {
    attributeNamePrefix: "",
    ignoreAttributes: false,
  };

  const parser = new XMLParser();
  return parser.parse(xmlData, options);
}
