export default function InputCom({
  title,
  placeholder,
  type = "text",
  value,
  handleChange,
}) {
  return (
    <div className="flex flex-col flex-1">
      <label className="block">
        <span className="block text-sm font-medium mb-1.5">{title}</span>
        <span className="flex items-center peer w-full transition duration-200 px-3.5 py-2 text-sm h-10 leading-[40px] rounded-md bg-transparent [&amp;.is-focus]:ring-[0.6px] border border-gray-300 [&amp;_input::placeholder]:text-gray-500 hover:border-gray-1000 [&amp;.is-focus]:border-gray-1000 [&amp;.is-focus]:ring-gray-1000">
          <input
            placeholder={placeholder}
            className="w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0"
            type={type}
            value={value}
            onChange={handleChange}
          />
        </span>
      </label>
    </div>
  );
}
