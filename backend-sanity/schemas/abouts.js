export default {
  name: 'abouts',
  type: 'document',
  title: 'Abouts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
      {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
      {
      name: 'imgUrl',
      type: 'image',
      title: 'ImgUrl',
      options: {
        hotspot: true,
      }
    },
  ],
}