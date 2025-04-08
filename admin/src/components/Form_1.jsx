import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

const materialOptions = {
  cotton: {
    label: "Cotton",
    types: {
      organic: {
        label: "Organic Cotton",
        details: {
          shrinkage: ["Low", "Medium"]
        }
      },
      combed: {
        label: "Combed Cotton",
        details: {
          shrinkage: ["Low", "High"]
        }
      }
    }
  },
  polyester: {
    label: "Polyester",
    types: {
      recycled: {
        label: "Recycled Polyester",
        details: {
          source: ["PET Bottles", "Industrial Waste"]
        }
      },
      microfiber: {
        label: "Microfiber Polyester",
        details: {
          breathability: ["High", "Low"]
        }
      }
    }
  }
};

export default function ShirtDetailsForm() {
  const [material, setMaterial] = useState("");
  const [materialType, setMaterialType] = useState("");
  const [materialDetailKey, setMaterialDetailKey] = useState("");
  const [materialProperty, setMaterialProperty] = useState("");

  const types = material ? materialOptions[material]?.types || {} : {};
  const details = materialType ? types[materialType]?.details || {} : {};
  const detailOptions = materialDetailKey ? details[materialDetailKey] || [] : [];

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <div className="flex flex-col gap-1">
        <Label>Material</Label>
        <Select value={material} onValueChange={(value) => {
          setMaterial(value);
          setMaterialType("");
          setMaterialDetailKey("");
          setMaterialProperty("");
        }}>
          <SelectTrigger>
            <SelectValue placeholder="Select Material" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(materialOptions).map(([key, val]) => (
              <SelectItem key={key} value={key}>{val.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {material && (
        <div className="flex flex-col gap-1">
          <Label>Material Type</Label>
          <Select value={materialType} onValueChange={(value) => {
            setMaterialType(value);
            setMaterialDetailKey("");
            setMaterialProperty("");
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(types).map(([key, val]) => (
                <SelectItem key={key} value={key}>{val.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {materialType && (
        <div className="flex flex-col gap-1">
          <Label>Detail Type</Label>
          <Select value={materialDetailKey} onValueChange={(value) => {
            setMaterialDetailKey(value);
            setMaterialProperty("");
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Select Detail" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(details).map((key) => (
                <SelectItem key={key} value={key}>{key}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {materialDetailKey && (
        <div className="flex flex-col gap-1">
          <Label>Property</Label>
          <Select value={materialProperty} onValueChange={(value) => setMaterialProperty(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Property" />
            </SelectTrigger>
            <SelectContent>
              {detailOptions.map((val) => (
                <SelectItem key={val} value={val}>{val}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <Label>Comments / Notes</Label>
        <Textarea placeholder="Any additional info..." rows={3} />
      </div>
    </div>
  );
}