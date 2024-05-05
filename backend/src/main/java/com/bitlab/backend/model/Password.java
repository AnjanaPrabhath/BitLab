package com.bitlab.backend.model;

public class Password {
    import jakarta.persistence.*;
    import lombok.AllArgsConstructor;
    import lombok.Data;
    import lombok.NoArgsConstructor;

    @Entity
    @AllArgsConstructor
    @NoArgsConstructor
    @Data
    @Table(name="Passwords")
    public class Password {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)    // define auto ID
        private int empId;
        private String empName;
        private String empAddress;
        private String empNumber;

    }
