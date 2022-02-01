export const createArray = (length: number) => {
  return [...Array(length)];
};

export const reducerArrayUniqWithCount = (acc: any, cur: any) => {
  const idx = acc.findIndex((a: any) => a._id === cur._id);
  if (idx > -1) {
    acc[idx] = { ...acc[idx], count: acc[idx].count + 1 };
  } else {
    acc = [...acc, { ...cur, count: 1 }];
  }

  return acc;
};
