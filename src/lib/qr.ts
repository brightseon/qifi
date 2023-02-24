import QRCode from 'qrcode';

type Encryption = 'WPA' | 'WEP' | 'NONE';

interface QRCodeResource {
    ssid: string;
    password: string;
    encryptionType: Encryption;
}

const createWiFiAccessURI = ({ ssid, password, encryptionType }: QRCodeResource): string => {
    const encryptionField = encryptionType === 'NONE' ? '' : `T:${encryptionType};`;
    const wifiURI = `WIFI:${encryptionField}S:${ssid};P:${password};;`;

    return wifiURI;
};

export const getQRCodeURL = async (resource: QRCodeResource) => {
    try {
        const url = await QRCode.toDataURL(createWiFiAccessURI(resource));

        return url;
    } catch (err: unknown) {
        console.error('get qr code url: ', err);
        throw Error('QR Code URL 생성 실패');
    }
};
