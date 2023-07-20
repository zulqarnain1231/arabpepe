import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useTheme, useMediaQuery } from "@mui/material";
import MapCard from "./MapCard";
import Data from "../../constants/Json/Dummy.json";

const TimeLine = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div className="w-full">
      <Timeline position={matches ? "alternate" : "right"}>
        <TimelineItem className="flex items-center justify-start gap-6">
          <TimelineSeparator className="md:h-[350px] h-[370px]">
            <TimelineDot />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <MapCard
            title="Phase 1: Token Strategy & Partnerships (Month 1-2)"
            options={Data.roadMap.phase1}
          />
        </TimelineItem>
        <TimelineItem className="flex items-center justify-start gap-6">
          <TimelineSeparator className="md:h-[350px] h-[370px]">
            <TimelineDot />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <MapCard
            title="Phase 2: Digital Presence & Listings (Month 1-2)"
            options={Data.roadMap.phase2}
          />
        </TimelineItem>
        <TimelineItem className="flex items-center justify-start gap-6">
          <TimelineSeparator className="md:h-[350px] h-3720px]">
            <TimelineDot />
            <TimelineConnector className="" />
          </TimelineSeparator>
          <TimelineContent>
            <MapCard
              title="Phase 3: Community & Market Growth (Month 1-2)"
              options={Data.roadMap.phase3}
            />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="flex items-start justify-start gap-6">
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <MapCard
            title="Phase 4: Exchange Listing & Brand Expansion (Month 3)"
            options={Data.roadMap.phase4}
          />
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
