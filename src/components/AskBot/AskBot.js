import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import { useState } from "react";
import { askQuestion } from "../../Apis2/HandleApiAsk";

function AskBot({ context }) {
  const [displayText, setDisplayText] = useState("");
  const [inputText, setInputText] = useState("");

  const handleSendClick = () => {
    setDisplayText("Waiting for response...");
    askQuestion(inputText, context)
      .then((response) => {
        console.log(response);
        setDisplayText(response.data.answer);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel sx={{ fontSize: "1.8rem" }}>Trợ giúp</FormLabel>
      <Textarea
        placeholder="So sánh xe này với Tesla model y."
        value={inputText}
        onChange={handleTextChange}
        sx={{ fontSize: "1.8rem" }}
        endDecorator={
          <Box
            sx={{
              display: "flex",
              gap: "var(--Textarea-paddingBlock)",
              pt: "var(--Textarea-paddingBlock)",
              borderTop: "1px solid",
              borderColor: "divider",
              flex: "auto",
            }}
          >
            <Button
              onClick={handleSendClick}
              sx={{ ml: "auto", fontSize: "1.8rem" }}
            >
              Gửi
            </Button>
          </Box>
        }
      />
      {displayText && (
        <FormControl >
          <FormLabel sx={{ fontSize: "1.8rem" }}>Trả lời</FormLabel>
            <Textarea variant="plain" sx={{ fontSize: "1.8rem" }} value={displayText} />
        </FormControl>
      )}
    </FormControl>
  );
}

export default AskBot;
