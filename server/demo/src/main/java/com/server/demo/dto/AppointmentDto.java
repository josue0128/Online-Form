package com.server.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto{
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String petName;
    private String brea;
    private int age;
    private String otherInformation;
}
