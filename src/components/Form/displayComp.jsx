import { Typography } from "@material-ui/core";


export const renderText = ({ label, color, align, variant }) => (
<Typography
    color={color ? color : "primary"}
    align={align ? align : "center"}
    variant={variant ? variant : "h2" }>
{label}
</Typography>


)