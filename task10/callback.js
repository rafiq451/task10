function showDownload(result) {
  console.log('Download selesai');
  console.log('Hasil Download :' + result);
}

function Download(callShowDownload) {
  setTimeout(function () {
    const result = 'Windows-10.exe';
    callShowDownload(result);
  }, 3000);
}
Download(showDownload);
