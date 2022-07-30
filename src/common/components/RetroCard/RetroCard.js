import { Button, IconButton, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import "./RetroCard.css";

const RetroCard = ({ text, color }) => {
  const maxStringSize = 120;
  const isOverflow = text.length > maxStringSize;
  const clippedText = text.substring(0, maxStringSize);
  const [displayText, setDisplayText] = useState(clippedText);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setDisplayText(isExpanded ? text : clippedText);
  }, [isExpanded]);

  return (
    <Paper
      sx={{
        wordWrap: "break-word",
        minHeight: "50px",
        height: "auto",
        padding: "10px",
        margin: "10px",
        backgroundColor: color,
      }}
    >
      <>
        {displayText}
        {isOverflow && (
          <Button
            sx={{ padding: 0, minWidth: "0", width: "15px" }}
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            ...
          </Button>
        )}
      </>
      <div className="card-footer">
        <IconButton sx={{ marginLeft: "auto" }} size="small">
          <ThumbUpOffAltOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton size="small">
          <SmsOutlinedIcon fontSize="inherit" />
        </IconButton>
      </div>
    </Paper>
  );
};

export default RetroCard;
