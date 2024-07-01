import axios from "axios";

const url = "http://10.10.20.16:8029/WSHoadonCA2.asmx";

export async function LaySLHD_daphathanh(startDate: string, endDate: string) {
  const soapEnvelope = `
  <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
      <LaySLHD_daphathanh xmlns="http://tempuri.org/">
        <tungay>${startDate}</tungay>
        <denngay>${endDate}</denngay>
      </LaySLHD_daphathanh>
    </soap12:Body>
  </soap12:Envelope>
        `;

  const response = await axios.post(url, soapEnvelope, {
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });

  return response;
}

export async function LaySLMST_Dacap(startDate: string, endDate: string) {
  const soapEnvelope = `
 <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <LaySLMST_Dacap xmlns="http://tempuri.org/">
            <tungay>${startDate}</tungay>
            <denngay>${endDate}</denngay>
          </LaySLMST_Dacap>
        </soap12:Body>
      </soap12:Envelope>
          `;

  const response = await axios.post(url, soapEnvelope, {
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });

  return response;
}

export async function LaySLMST_GoiDV(startDate: string, endDate: string) {
  const soapEnvelope = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <LaySLMST_GoiDV xmlns="http://tempuri.org/">
            <tungay>${startDate}</tungay>
            <denngay>${endDate}</denngay>
          </LaySLMST_GoiDV>
        </soap12:Body>
      </soap12:Envelope>
            `;

  const response = await axios.post(url, soapEnvelope, {
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });

  return response;
}

export async function LaySLMST_Hoatdong(startDate: string, endDate: string) {
  const soapEnvelope = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <LaySLMST_Hoatdong xmlns="http://tempuri.org/">
            <tungay>${startDate}</tungay>
            <denngay>${endDate}</denngay>
          </LaySLMST_Hoatdong>
        </soap12:Body>
      </soap12:Envelope>
            `;

  const response = await axios.post(url, soapEnvelope, {
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });

  return response;
}

export async function LaySL_TKTruycap(startDate: string, endDate: string) {
  const soapEnvelope = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <LaySL_TKTruycap xmlns="http://tempuri.org/">
            <tungay>${startDate}</tungay>
            <denngay>${endDate}</denngay>
          </LaySL_TKTruycap>
        </soap12:Body>
      </soap12:Envelope>
            `;

  const response = await axios.post(url, soapEnvelope, {
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });

  return response;
}

export async function LayTGTB_KyguiCM(startDate: string, endDate: string) {
  const soapEnvelope = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <LayTGTB_KyguiCM xmlns="http://tempuri.org/">
            <tungay>${startDate}</tungay>
            <denngay>${endDate}</denngay>
          </LayTGTB_KyguiCM>
        </soap12:Body>
      </soap12:Envelope>
            `;

  const response = await axios.post(url, soapEnvelope, {
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });

  return response;
}

export async function LayDS_ChisoHD(Masothue: string) {
  const soapEnvelope = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <LayDS_ChisoHD xmlns="http://tempuri.org/">
          <Masothue>${Masothue}</Masothue>
          </LayDS_ChisoHD>
        </soap12:Body>
      </soap12:Envelope>
            `;

  const response = await axios.post(url, soapEnvelope, {
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });

  return response;
}

export async function LayDS_taikhoan_donvi(Masothue: string) {
  const soapEnvelope = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <LayDS_taikhoan_donvi xmlns="http://tempuri.org/">
          <Masothue>${Masothue}</Masothue>
          </LayDS_taikhoan_donvi>
        </soap12:Body>
      </soap12:Envelope>
            `;

  const response = await axios.post(url, soapEnvelope, {
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });

  return response;
}

export async function LayDS_LoaiHDSD_Donvi(Masothue: string) {
  const soapEnvelope = `
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <LayDS_LoaiHDSD_Donvi xmlns="http://tempuri.org/">
          <Masothue>${Masothue}</Masothue>
          </LayDS_LoaiHDSD_Donvi>
        </soap12:Body>
      </soap12:Envelope>
            `;

  const response = await axios.post(url, soapEnvelope, {
    headers: {
      "Content-Type": "application/soap+xml;charset=UTF-8",
    },
  });

  return response;
}
