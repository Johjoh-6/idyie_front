<script lang="ts">
  import Editor from "@tinymce/tinymce-svelte";

  let apiKey = "no-api-key";
  let conf = {
    height: 500,
    plugins: [
      "a11ychecker",
      "advlist",
      "advcode",
      "advtable",
      "autolink",
      "checklist",
      "export",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "powerpaste",
      "fullscreen",
      "formatpainter",
      "insertdatetime",
      "media",
      "table",
      "help",
      "wordcount",
    ],
    toolbar:
      "undo redo | a11ycheck casechange blocks | bold italic backcolor | link image  | alignleft aligncenter alignright alignjustify | " +
      "bullist numlist checklist outdent indent | removeformat | code table help",
    image_title: true,
    automatic_uploads: true,
    file_picker_types: "image",
    file_picker_callback: function (
      cb: (arg0: any, arg1: { title: any }) => void,
      value: any,
      meta: any
    ) {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");

      input.onchange = function () {
        // @ts-ignore
        const file = this.files[0];

        const reader = new FileReader();
        reader.onload = function () {
          const id = "blobid" + new Date().getTime();
          // @ts-ignore
          const blobCache = tinymce.activeEditor.editorUpload.blobCache;
          // @ts-ignore
          const base64 = reader.result.split(",")[1];
          const blobInfo = blobCache.create(id, file, base64);
          blobCache.add(blobInfo);
          cb(blobInfo.blobUri(), { title: file.name });
        };
        reader.readAsDataURL(file);
      };

      input.click();
    },
    autosave_restore_when_empty: true,
  };

  export let val = "";
</script>

<Editor {apiKey} {conf} bind:value="{val}" />
