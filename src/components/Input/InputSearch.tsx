interface InputSearchProps {
  onChange:  (e) => void;
  keyword: string;
  placeholder: string;
  label?: string;
}


export const InputSearch = ({ onChange, placeholder, keyword, label }: InputSearchProps) => {
  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input type="text" placeholder={placeholder} className="input input-bordered input-md w-full max-w-xs" value={keyword} onChange={(e) => onChange(e.target.value)} />

      </div>
    </>
  )
}