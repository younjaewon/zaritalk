const REG_EX = {
  phone: (phone: string) => {
    const regex = /^[0-9]{10,11}$/;
    return regex.test(phone);
  },
  number: (number: string) => {
    const regex = /^[0-9\b]+$/;
    return regex.test(number);
  },
} as const;

export default REG_EX;
