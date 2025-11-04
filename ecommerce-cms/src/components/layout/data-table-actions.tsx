import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { Button } from "../ui/button";
import { EditIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

type DataTableActionsProps = {
    itemid: string | number;   
}

export function DataTableActions({ itemid }: DataTableActionsProps) {
    const location = useLocation();
    const navigate = useNavigate();

    function handleNavigateToId() {
        const path = location.pathname;
        navigate(`${path}/${itemid}`);
    }
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline"
                size="icon"
                onClick={handleNavigateToId}>
                    <EditIcon />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                
            </TooltipContent>
        </Tooltip>
    )
}