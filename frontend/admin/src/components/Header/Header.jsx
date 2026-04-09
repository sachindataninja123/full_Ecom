import React, { useContext, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaRegBell } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { CiUser } from "react-icons/ci";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { MyContext } from "../../context/MyContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorElMyAcc, setAnchorElMyAcc] = useState(null);
  const open = Boolean(anchorElMyAcc);

  const { isSideBarOpen, setIsSideBarOpen, isLoggedIn, setIsLoggedIn } =
    useContext(MyContext);

  const handleClickMyAcc = (event) => {
    if (!isLoggedIn) return;
    setAnchorElMyAcc(event.currentTarget);
  };

  const handleCloseMyAcc = () => {
    setAnchorElMyAcc(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); //
    handleCloseMyAcc();
  };

  return (
    <header className="w-full shadow-md py-3 px-5 bg-white flex items-center justify-between">
      {/* LEFT */}
      <div>
        <Button
          className="w-10! h-10! rounded-full! min-w-10!"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <HiMenuAlt1 size={22} />
        </Button>
      </div>

      {/* RIGHT */}
      <div className="w-[40%] flex items-center justify-end gap-5">
        {/* Notification */}
        <IconButton>
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>

        {/* Avatar / Login */}
        <div className="relative">
          {isLoggedIn ? (
            <div
              className="rounded-full w-9 h-9 overflow-hidden cursor-pointer"
              onClick={handleClickMyAcc}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <Button variant="contained" className="rounded-full!">
              Sign In
            </Button>
          )}

          {/* Always render Menu */}
          <Menu
            anchorEl={anchorElMyAcc}
            open={open}
            onClose={handleCloseMyAcc}
            onClick={handleCloseMyAcc}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <div className="flex items-center gap-3">
                <img
                  src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-[14px] font-medium">Sachin</h2>
                  <p className="text-[12px] text-gray-400">sachin@gmail.com</p>
                </div>
              </div>
            </MenuItem>

            <Divider />

            <MenuItem>
              <CiUser className="mr-2" /> Profile
            </MenuItem>

            <MenuItem onClick={handleLogout}>
              <VscSignOut className="mr-2" /> Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
