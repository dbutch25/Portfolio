export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
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