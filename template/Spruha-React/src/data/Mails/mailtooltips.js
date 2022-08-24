export function Example1() {
  const renderTooltip = (props) => (
    <Tooltip className="tooltip bs-tooltip-top" id="button-tooltip" {...props}>
      Tooltip on the top
    </Tooltip>
  );
  return (
    <div>
      <OverlayTrigger
        className="hover1"
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="primary">Hover me</Button>
      </OverlayTrigger>
    </div>
  );
}