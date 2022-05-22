import axios from 'axios';

async function submitImage(e, setImage) {
  const data = new FormData();
  data.append('image', e.target.files[0]);

  const key = process.env.NEXT_PUBLIC_IMGBB_KEY;

  await axios({
    method: 'post',
    url: `https://api.imgbb.com/1/upload?key=${key}`,
    data: data,
  })
    .then((res) => {
      const url = res.data.data.url;
      return url;
    })
    .then((url) => {
      setImage(url);
      localStorage.setItem('image', url);
    })
    .catch((e) => console.log(e));
}

export { submitImage };
