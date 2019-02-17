pragma solidity >=0.4.22 <0.6.0;
contract PlotterLineWriter {
    uint public lastDrawingId;
    uint public startDrawingId;

    address private owner_;

    constructor () public {
        owner_ = msg.sender;   
        lastDrawingId = 0;
        startDrawingId = 0;
    }

    event DrawLines(bytes32 id, uint32[] x, uint32[] y, bool[] p);
    
    function drawLines(uint32[] memory x, uint32[] memory y, bool[] memory p) public {
        require (x.length < 300, "needs to be fewer than 300 points");
        require (x.length % 2 != 1, "needs to be an even number of points");
        require (x.length == y.length, "lengths need to be consistent");
        require (x.length == p.length, "lengths need to be consistent");
        
        emit DrawLines(keccak256(abi.encodePacked(msg.sender, getDrawingId())), x, y, p);
    }

    function resetDrawing() public {
        require(msg.sender == owner_, "Last drawing id can only be set by owner");
        startDrawingId = lastDrawingId;
    }

    function getDrawingId() private returns(uint) {
        return lastDrawingId++;
    }
}
