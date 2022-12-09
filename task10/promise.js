const tunggu = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('tunggu...');
    }, 0);
  });
};

const download = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = 'Window-10.exe';
      resolve(`Hasil Download : ${result} `);
    }, 3000);
  });
};

const selesai = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Selesai..');
    }, 1000);
  });
};

// const main = () => {
//   selesai()
//     .then((res) => {
//       console.log(res);
//       return download();
//     })
//     .then((res) => {
//       console.log(res);
//       return download();
//     });
// };

async function main() {
  console.log(await tunggu());
  console.log(await selesai());
  console.log(await download());
}

main();
