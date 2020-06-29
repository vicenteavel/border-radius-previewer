export default function copyToClipboard() {
   const element = document.getElementById('resultToCopy')
   
   if(!element.value)
      return;

   element.select();
   document.execCommand("copy");
   alert("Copied the css to clipboard!");
}