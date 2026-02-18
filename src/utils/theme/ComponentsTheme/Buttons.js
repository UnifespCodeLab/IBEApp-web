import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "md",
    fontWeight: "bold",
    transition: "all 0.2s",
    cursor: "pointer",
  },
  variants: {
    visual: {
      action: {
        bg: "primary.600",
        color: "white",
        _hover: {
          bg: "primary.700",
        },
        _active: {
          bg: "primary.800",
          transform: "scale(0.98)",
        },
      },
      tab: {
        bg: "light.200",
        color: "primary.700",
        _hover: {
          bg: "light.300",
        },
        _selected: {
          bg: "primary.600",
          color: "white",
        },
      },
    },
    size: {
      md: { px: "4", py: "2", fontSize: "md" },
      lg: { px: "8", py: "4", fontSize: "lg" },
    },
  },
  defaultVariants: {
    visual: "action",
    size: "md",
  },
})