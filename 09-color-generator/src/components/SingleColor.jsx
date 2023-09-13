import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to Clipboard');
      } catch (error) {
        toast.success('Failed to copy to Clipboard');
      }
    } else {
      toast.error('Clipboard access not available');
    }
  };

  return (
    <article
      className={`color ${index < 10 ? 'color' : 'color-light'}`}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
};
export default SingleColor;
