export default {
  name: 'contact',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
      {
      name: 'description',
      type: 'string',
      title: 'Description'
    },
      {
      name: 'imageurl',
      type: 'image',
      title: 'ImgURL',
      options: {
        hotspot: true,
      }
    },
  ],
}