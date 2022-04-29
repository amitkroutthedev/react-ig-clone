import React from "react";
import SuggestionUserItem from "./SuggestionUserItem/SuggestionUserItem";
import "./Suggestions.css";
function Suggestions() {
  return (
    <div className="suggestions">
      <div className="userSwitch">
        <div className="userSwitchAvatar">
          <img
            src="https://images.unsplash.com/photo-1650594122465-7608fcd64620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="userSwitchAvatar"
          />
        </div>
        <div className="userSwitchName">
          <span>Jaky12</span>
          <span>Jatin Sahoo</span>
        </div>
        <button>Switch</button>
      </div>
      <div className="suggestionUsers">
        <div className="suggestionUsersHeader">
          <span>Suggestions For You</span>
          <span>See All</span>
        </div>
        <SuggestionUserItem
          userImage="https://images.unsplash.com/photo-1650738825900-e716aa15ca9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          username="Ronald1"
          displayName="Christ Ronald"
        />
        <SuggestionUserItem
          userImage="https://images.unsplash.com/photo-1650738825900-e716aa15ca9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          username="Ronald1"
          displayName="Christ Ronald"
        />
        <SuggestionUserItem
          userImage="https://images.unsplash.com/photo-1650738825900-e716aa15ca9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          username="Ronald1"
          displayName="Christ Ronald"
        />
        <SuggestionUserItem
          userImage="https://images.unsplash.com/photo-1650738825900-e716aa15ca9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          username="Ronald1"
          displayName="Christ Ronald"
        />
      </div>
    </div>
  );
}

export default Suggestions;
