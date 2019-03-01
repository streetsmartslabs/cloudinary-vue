import Vue from "vue";
import { mount } from "@vue/test-utils";
import CldPicture from "../../src/components/CldPicture.vue";
import { sourcesOfPicture } from "./sourcesOfPicture";

describe("CldPicture", () => {
  it("renders", async () => {
    const picture = mount({
      template: `
        <cld-picture cloudName="demo" publicId="face_top" />
      `,
      components: { CldPicture }
    });

    await Vue.nextTick();

    expect(picture.is("picture")).toBe(true);
    expect(picture.findAll("img").length).toBe(1);
    expect(picture.findAll("source").length).toBe(2);
    expect(sourcesOfPicture(picture)).toEqual({
      "image/jpeg": "http://res.cloudinary.com/demo/image/upload/face_top.jpeg",
      "image/webp": "http://res.cloudinary.com/demo/image/upload/face_top.webp"
    });
  });
});
