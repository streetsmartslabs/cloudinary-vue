### Attributes

Refer to base [Cloudinary JS SDK](https://github.com/cloudinary/cloudinary_js#configuration) for configuration options.

See [Image transformations documentation](http://cloudinary.com/documentation/image_transformations) for all the options accepted by `CldPicture` and `CldTransformation`.

Options provided to the component instance are going to be transformed from lower camel case to snake case.

### Events

Use `v-on:*.native` to listen to native DOM events. `CldPicture` outputs an `picture`, `img` and `source`s elements and does not have any events on it's own.

```jsx
<cld-picture cloudName="demo" publicId="small_dinosaur" />
```