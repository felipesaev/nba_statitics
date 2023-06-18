import { TextField } from "@mui/material"

export const InputSearch = ({ label, onChange, keyword }) => {
    return (
        <>
            <TextField id="input-with-sx" label={label}
                value={keyword}
                variant="standard" onChange={(e) => onChange(e.target.value)} />

        </>
    )
}