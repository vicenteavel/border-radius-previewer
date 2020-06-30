export default function copyToClipboard(id) {
   const element = document.getElementById(id);
   
   if(!element.value)
      return;

   element.select();
   document.execCommand("copy");
   alert("Copied the css to the clipboard!");
}