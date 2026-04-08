
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

  const handleClickMyAcc = (event) => {
    setAnchorElMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorElMyAcc(null);
  };

  const { isSideBarOpen, setIsSideBarOpen } = useContext(MyContext);

  return (
    
    <header className="w-full shadow-md py-3 px-5 bg-white flex items-center justify-between">
      <div className="part1">
        <Button
          className="w-10! h-10! rounded-full! min-w-10! text-[rgba(0,0,0,0.8)]!"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <HiMenuAlt1 size={22} className="text-[rgba(0,0,0,0.8)]" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="notifications">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>

        <div className="relative">
          <div
            className="rounded-full w-9 h-9 overflow-hidden cursor-pointer"
            onClick={handleClickMyAcc}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <Menu
            anchorEl={anchorElMyAcc}
            id="account-menu"
            open={open}
            onClose={handleCloseMyAcc}
            onClick={handleCloseMyAcc}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleCloseMyAcc} className="bg-white!">
              <div className="flex items-center gap-3">
                <div className="rounded-full w-9 h-9 overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="info leading-tight">
                  <h2 className="text-[15px] font-medium">Angellia Gotellina</h2>
                  <p className="text-[13px] text-gray-400 font-medium">
                    angelliagotellina@gmail.com
                  </p>
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem>
              <CiUser className="mr-2" size={23} /> Profile
            </MenuItem>
            <MenuItem>
              <VscSignOut className="mr-2" size={22} /> Sign Out
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;