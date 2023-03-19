import useQRForm from '@hooks/useQRForm';

interface Props {
    qr?: ReturnType<typeof useQRForm>['qr'];
}

const QR = ({ qr }: Props) => {
    if (!qr) return null;

    return <img src={qr} />;
};

export default QR;
