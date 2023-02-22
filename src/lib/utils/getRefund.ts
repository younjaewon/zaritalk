type getRefundType = {
  rent: string;
};

const getRefund = ({ rent }: getRefundType) => {
  let refund = 0; // 환급금
  const baseMonth = 60; // 5년치 계산

  const pastFee = 0.12;
  const currentFee = 0.17;

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  let refundMonth = year >= 2023 ? (year - 2023) * 12 + month : 0;

  refund = (baseMonth - refundMonth) * pastFee * Number(rent) + refundMonth * currentFee * Number(rent);

  return refund;
};

export default getRefund;
